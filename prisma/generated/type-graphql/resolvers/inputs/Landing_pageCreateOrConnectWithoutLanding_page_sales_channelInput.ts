import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_pageCreateWithoutLanding_page_sales_channelInput } from "../inputs/Landing_pageCreateWithoutLanding_page_sales_channelInput";
import { Landing_pageWhereUniqueInput } from "../inputs/Landing_pageWhereUniqueInput";

@TypeGraphQL.InputType("Landing_pageCreateOrConnectWithoutLanding_page_sales_channelInput", {})
export class Landing_pageCreateOrConnectWithoutLanding_page_sales_channelInput {
  @TypeGraphQL.Field(_type => Landing_pageWhereUniqueInput, {
    nullable: false
  })
  where!: Landing_pageWhereUniqueInput;

  @TypeGraphQL.Field(_type => Landing_pageCreateWithoutLanding_page_sales_channelInput, {
    nullable: false
  })
  create!: Landing_pageCreateWithoutLanding_page_sales_channelInput;
}
