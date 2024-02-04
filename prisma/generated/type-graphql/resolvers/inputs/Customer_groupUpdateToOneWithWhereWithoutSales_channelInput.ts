import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { Customer_groupUpdateWithoutSales_channelInput } from "../inputs/Customer_groupUpdateWithoutSales_channelInput";
import { Customer_groupWhereInput } from "../inputs/Customer_groupWhereInput";

@TypeGraphQL.InputType("Customer_groupUpdateToOneWithWhereWithoutSales_channelInput", {})
export class Customer_groupUpdateToOneWithWhereWithoutSales_channelInput {
  @TypeGraphQL.Field(_type => Customer_groupWhereInput, {
    nullable: true
  })
  where?: Customer_groupWhereInput | undefined;

  @TypeGraphQL.Field(_type => Customer_groupUpdateWithoutSales_channelInput, {
    nullable: false
  })
  data!: Customer_groupUpdateWithoutSales_channelInput;
}
