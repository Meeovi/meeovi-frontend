import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelScalarWhereInput } from "../inputs/Landing_page_sales_channelScalarWhereInput";
import { Landing_page_sales_channelUpdateManyMutationInput } from "../inputs/Landing_page_sales_channelUpdateManyMutationInput";

@TypeGraphQL.InputType("Landing_page_sales_channelUpdateManyWithWhereWithoutLanding_pageInput", {})
export class Landing_page_sales_channelUpdateManyWithWhereWithoutLanding_pageInput {
  @TypeGraphQL.Field(_type => Landing_page_sales_channelScalarWhereInput, {
    nullable: false
  })
  where!: Landing_page_sales_channelScalarWhereInput;

  @TypeGraphQL.Field(_type => Landing_page_sales_channelUpdateManyMutationInput, {
    nullable: false
  })
  data!: Landing_page_sales_channelUpdateManyMutationInput;
}
