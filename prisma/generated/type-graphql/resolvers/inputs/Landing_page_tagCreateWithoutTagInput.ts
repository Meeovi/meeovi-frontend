import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateNestedOneWithoutLanding_page_tagInput } from "../inputs/Landing_pageCreateNestedOneWithoutLanding_page_tagInput";

@TypeGraphQL.InputType("Landing_page_tagCreateWithoutTagInput", {})
export class Landing_page_tagCreateWithoutTagInput {
  @TypeGraphQL.Field(_type => Landing_pageCreateNestedOneWithoutLanding_page_tagInput, {
    nullable: false
  })
  landing_page!: Landing_pageCreateNestedOneWithoutLanding_page_tagInput;
}
