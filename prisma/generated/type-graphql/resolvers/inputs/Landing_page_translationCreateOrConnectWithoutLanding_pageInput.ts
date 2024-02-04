import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_translationCreateWithoutLanding_pageInput } from "../inputs/Landing_page_translationCreateWithoutLanding_pageInput";
import { Landing_page_translationWhereUniqueInput } from "../inputs/Landing_page_translationWhereUniqueInput";

@TypeGraphQL.InputType("Landing_page_translationCreateOrConnectWithoutLanding_pageInput", {})
export class Landing_page_translationCreateOrConnectWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => Landing_page_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_page_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_page_translationCreateWithoutLanding_pageInput, {
    nullable: false
  })
  create!: Landing_page_translationCreateWithoutLanding_pageInput;
}
