import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_registration_sales_channelsCreateManyInput } from "../../../inputs/Customer_group_registration_sales_channelsCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCustomer_group_registration_sales_channelsArgs {
  @TypeGraphQL.Field(_type => [Customer_group_registration_sales_channelsCreateManyInput], {
    nullable: false
  })
  data!: Customer_group_registration_sales_channelsCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
