import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CustomerUpdateWithoutSales_channel_api_contextInput } from "../inputs/CustomerUpdateWithoutSales_channel_api_contextInput";
import { CustomerWhereInput } from "../inputs/CustomerWhereInput";

@TypeGraphQL.InputType("CustomerUpdateToOneWithWhereWithoutSales_channel_api_contextInput", {})
export class CustomerUpdateToOneWithWhereWithoutSales_channel_api_contextInput {
  @TypeGraphQL.Field(_type => CustomerWhereInput, {
    nullable: true
  })
  where?: CustomerWhereInput | undefined;

  @TypeGraphQL.Field(_type => CustomerUpdateWithoutSales_channel_api_contextInput, {
    nullable: false
  })
  data!: CustomerUpdateWithoutSales_channel_api_contextInput;
}
