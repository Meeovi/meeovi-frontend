import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput } from "../inputs/Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput";

@TypeGraphQL.InputType("Landing_page_tagUpdateWithoutTagInput", {})
export class Landing_page_tagUpdateWithoutTagInput {
  @TypeGraphQL.Field(_type => Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput, {
    nullable: true
  })
  landing_page?: Landing_pageUpdateOneRequiredWithoutLanding_page_tagNestedInput | undefined;
}
