import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_translationWhereUniqueInput } from "../../../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class DeleteOneCustomer_group_translationArgs {
  @TypeGraphQL.Field(_type => Customer_group_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_group_translationWhereUniqueInput;
}
