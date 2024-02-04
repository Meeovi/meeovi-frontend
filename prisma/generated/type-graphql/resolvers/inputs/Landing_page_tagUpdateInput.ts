import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput } from "../inputs/Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput";
import { TagUpdateOneRequiredWithoutLanding_page_tagNestedInput } from "../inputs/TagUpdateOneRequiredWithoutLanding_page_tagNestedInput";

@TypeGraphQL.InputType("Landing_page_tagUpdateInput", {})
export class Landing_page_tagUpdateInput {
  @TypeGraphQL.Field(_type => Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput, {
    nullable: true
  })
  landing_page?: Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput | undefined;

  @TypeGraphQL.Field(_type => TagUpdateOneRequiredWithoutLanding_page_tagNestedInput, {
    nullable: true
  })
  tag?: TagUpdateOneRequiredWithoutLanding_page_tagNestedInput | undefined;
}
