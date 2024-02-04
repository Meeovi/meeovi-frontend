import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Landing_page_sales_channelCreateManySales_channelInput } from "../inputs/Landing_page_sales_channelCreateManySales_channelInput";

@TypeGraphQL.InputType("Landing_page_sales_channelCreateManySales_channelInputEnvelope", {})
export class Landing_page_sales_channelCreateManySales_channelInputEnvelope {
  @TypeGraphQL.Field(_type => [Landing_page_sales_channelCreateManySales_channelInput], {
    nullable: false
  })
  data!: Landing_page_sales_channelCreateManySales_channelInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
