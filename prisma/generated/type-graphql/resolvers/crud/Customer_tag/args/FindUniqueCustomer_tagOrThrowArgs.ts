import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_tagWhereUniqueInput } from "../../../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class FindUniqueCustomer_tagOrThrowArgs {
  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_tagWhereUniqueInput;
}
