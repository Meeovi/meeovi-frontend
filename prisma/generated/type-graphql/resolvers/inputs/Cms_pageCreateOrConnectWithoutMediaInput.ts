import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Cms_pageCreateWithoutMediaInput } from "../inputs/Cms_pageCreateWithoutMediaInput";
import { Cms_pageWhereUniqueInput } from "../inputs/Cms_pageWhereUniqueInput";

@TypeGraphQL.InputType("Cms_pageCreateOrConnectWithoutMediaInput", {})
export class Cms_pageCreateOrConnectWithoutMediaInput {
  @TypeGraphQL.Field(_type => Cms_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Cms_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Cms_pageCreateWithoutMediaInput, {
    nullable: false
  })
  create!: Cms_pageCreateWithoutMediaInput;
}
