import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressUpdateInput } from "../../../inputs/Customer_addressUpdateInput";
import { Customer_addressWhereUniqueInput } from "../../../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomer_addressArgs {
  @TypeGraphQL.Field(_type => Customer_addressUpdateInput, {
    nullable: false
  })
  data!: Customer_addressUpdateInput;

  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;
}
