import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressCreateInput } from "../../../inputs/Customer_addressCreateInput";
import { Customer_addressUpdateInput } from "../../../inputs/Customer_addressUpdateInput";
import { Customer_addressWhereUniqueInput } from "../../../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomer_addressArgs {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_addressCreateInput, {
    nullable: false
  })
  create!: Customer_addressCreateInput;

  @TypeGraphQL.Field(_type => Customer_addressUpdateInput, {
    nullable: false
  })
  update!: Customer_addressUpdateInput;
}
