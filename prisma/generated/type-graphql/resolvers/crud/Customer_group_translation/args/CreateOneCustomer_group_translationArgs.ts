import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_translationCreateInput } from "../../../inputs/Customer_group_translationCreateInput";

@TypeGraphQL.ArgsType()
export class CreateOneCustomer_group_translationArgs {
  @TypeGraphQL.Field(_type => Customer_group_translationCreateInput, {
    nullable: false
  })
  data!: Customer_group_translationCreateInput;
}
