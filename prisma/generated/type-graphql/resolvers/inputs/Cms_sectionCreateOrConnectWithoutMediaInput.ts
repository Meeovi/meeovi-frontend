import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_sectionCreateWithoutMediaInput } from "../inputs/Cms_sectionCreateWithoutMediaInput";
import { Cms_sectionWhereUniqueInput } from "../inputs/Cms_sectionWhereUniqueInput";

@TypeGraphQL.InputType("Cms_sectionCreateOrConnectWithoutMediaInput", {})
export class Cms_sectionCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Cms_sectionWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_sectionWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_sectionCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Cms_sectionCreateWithoutMediaInput;
}
