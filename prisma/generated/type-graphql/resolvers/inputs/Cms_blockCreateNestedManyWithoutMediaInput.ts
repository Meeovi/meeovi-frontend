import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_blockCreateManyMediaInputEnvelope } from "../inputs/Cms_blockCreateManyMediaInputEnvelope";
import { Cms_blockCreateOrConnectWithoutMediaInput } from "../inputs/Cms_blockCreateOrConnectWithoutMediaInput";
import { Cms_blockCreateWithoutMediaInput } from "../inputs/Cms_blockCreateWithoutMediaInput";
import { Cms_blockWhereUniqueInput } from "../inputs/Cms_blockWhereUniqueInput";

@TypeGraphQL.InputType("Cms_blockCreateNestedManyWithoutMediaInput", {})
export class Cms_blockCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Cms_blockCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Cms_blockCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Cms_blockCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_blockCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_blockCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_blockWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_blockWhereUniqueInput[] | undefined;
}
