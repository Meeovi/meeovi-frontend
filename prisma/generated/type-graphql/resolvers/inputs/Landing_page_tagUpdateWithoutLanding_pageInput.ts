import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { TagUpdateOneRequiredWithoutLanding_page_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutLanding_page_tagNestedInput";

@TypeGraphQL.InputType("Landing_page_tagUpdateWithoutLanding_pageInput", {})
export class Landing_page_tagUpdateWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutLanding_page_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutLanding_page_tagNestedInput | undefined;
}
