import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageUpdateWithoutLanding_page_translationInput } from "../inputs/Landing_pageUpdateWithoutLanding_page_translationInput";
import { Landing_pageWhereInput } from "../inputs/Landing_pageWhereInput";

@TypeGraphQL.InputType("Landing_pageUpdateToOneWithWhereWithoutLanding_page_translationInput", {})
export class Landing_pageUpdateToOneWithWhereWithoutLanding_page_translationInput {
  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  where?: Landing_pageWhereInput | undefined;

  @TypeGraphQL.Field(_type => Landing_pageUpdateWithoutLanding_page_translationInput, {
    nullable: false
  })
  data!: Landing_pageUpdateWithoutLanding_page_translationInput;
}
