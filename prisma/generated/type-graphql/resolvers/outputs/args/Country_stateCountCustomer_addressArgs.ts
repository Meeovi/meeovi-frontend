import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressWhereInput } from "../../inputs/Customer_addressWhereInput";

@TypeGraphQL.ArgsType()
export class Country_stateCountCustomer_addressArgs {
  @TypeGraphQL.Field(_type => Customer_addressWhereInput, {
    nullable: true
  })
  where?: Customer_addressWhereInput | undefined;
}
