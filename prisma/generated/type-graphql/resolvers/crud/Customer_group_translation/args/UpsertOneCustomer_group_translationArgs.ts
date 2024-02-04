import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_translationCreateInput } from "../../../inputs/Customer_group_translationCreateInput";
import { Customer_group_translationUpdateInput } from "../../../inputs/Customer_group_translationUpdateInput";
import { Customer_group_translationWhereUniqueInput } from "../../../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomer_group_translationArgs {
  @TypeGraphQL.Field(_type => Customer_group_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_group_translationWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_group_translationCreateInput, {
    nullable: false
  })
  create!: Customer_group_translationCreateInput;

  @TypeGraphQL.Field(_type => Customer_group_translationUpdateInput, {
    nullable: false
  })
  update!: Customer_group_translationUpdateInput;
}
