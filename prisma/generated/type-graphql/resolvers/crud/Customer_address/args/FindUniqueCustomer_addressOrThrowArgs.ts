import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_addressWhereUniqueInput } from "../../../inputs/Customer_addressWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomer_addressOrThrowArgs {
  @TypeGraphQL.Field(_type => Customer_addressWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_addressWhereUniqueInput;
}
