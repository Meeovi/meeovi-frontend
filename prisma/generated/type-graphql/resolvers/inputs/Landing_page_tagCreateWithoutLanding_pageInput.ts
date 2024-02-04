import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagCreateNestedOneWithoutLanding_page_tagInput } from "../inputs/TagCreateNestedOneWithoutLanding_page_tagInput";

@TypeGraphQL.InputType("Landing_page_tagCreateWithoutLanding_pageInput", {})
export class Landing_page_tagCreateWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => TagCreateNestedOneWithoutLanding_page_tagInput, {
    nullable: false
  })
  tag!: TagCreateNestedOneWithoutLanding_page_tagInput;
}
