import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateManyMediaInputEnvelope } from "../inputs/Cms_pageCreateManyMediaInputEnvelope";
import { Cms_pageCreateOrConnectWithoutMediaInput } from "../inputs/Cms_pageCreateOrConnectWithoutMediaInput";
import { Cms_pageCreateWithoutMediaInput } from "../inputs/Cms_pageCreateWithoutMediaInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateNestedManyWithoutMediaInput", {})
export class Cms_pageCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Cms_pageCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Cms_pageCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Cms_pageCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_pageCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_pageCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_pageWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_pageWhereUniqueInput[] | undefined;
}
