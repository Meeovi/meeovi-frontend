import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateManyMediaInputEnvelope } from "../inputs/Cms_sectionCreateManyMediaInputEnvelope";
import { Cms_sectionCreateOrConnectWithoutMediaInput } from "../inputs/Cms_sectionCreateOrConnectWithoutMediaInput";
import { Cms_sectionCreateWithoutMediaInput } from "../inputs/Cms_sectionCreateWithoutMediaInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionCreateNestedManyWithoutMediaInput", {})
export class Cms_sectionCreateNestedManyWithoutMediaInput {
  @TypeGraphQL.Field(_type => [Cms_sectionCreateWithoutMediaInput], {
    nullable: true
  })
  create?: Cms_sectionCreateWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionCreateOrConnectWithoutMediaInput], {
    nullable: true
  })
  connectOrCreate?: Cms_sectionCreateOrConnectWithoutMediaInput[] | undefined;

  @TypeGraphQL.Field(_type => Cms_sectionCreateManyMediaInputEnvelope, {
    nullable: true
  })
  createMany?: Cms_sectionCreateManyMediaInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [Cms_sectionWhereUniqueInput], {
    nullable: true
  })
  connect?: Cms_sectionWhereUniqueInput[] | undefined;
}
