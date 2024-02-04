import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateWithoutLanding_page_tagInput } from "../inputs/Landing_pageCreateWithoutLanding_page_tagInput";
import { Landing_pageUpdateWithoutLanding_page_tagInput } from "../inputs/Landing_pageUpdateWithoutLanding_page_tagInput";
import { Landing_pageWhereInput } from "../inputs/Landing_pageWhereInput";

@TypeGraphQL.InputType("Landing_pageUpsertWithoutLanding_page_tagInput", {})
export class Landing_pageUpsertWithoutLanding_page_tagInput {
  @TypeGraphQL.Field(_type => Landing_pageUpdateWithoutLanding_page_tagInput, {
    nullable: false
  })
  update!: Landing_pageUpdateWithoutLanding_page_tagInput;

  @TypeGraphQL.Field(_type => Landing_pageCreateWithoutLanding_page_tagInput, {
    nullable: false
  })
  create!: Landing_pageCreateWithoutLanding_page_tagInput;

  @TypeGraphQL.Field(_type => Landing_pageWhereInput, {
    nullable: true
  })
  where?: Landing_pageWhereInput | undefined;
}
