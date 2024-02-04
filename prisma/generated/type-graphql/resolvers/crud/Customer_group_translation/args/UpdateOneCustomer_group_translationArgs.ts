import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_translationUpdateInput } from "../../../inputs/Customer_group_translationUpdateInput";
import { Customer_group_translationWhereUniqueInput } from "../../../inputs/Customer_group_translationWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomer_group_translationArgs {
  @TypeGraphQL.Field(_type => Customer_group_translationUpdateInput, {
    nullable: false
  })
  data!: Customer_group_translationUpdateInput;

  @TypeGraphQL.Field(_type => Customer_group_translationWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_group_translationWhereUniqueInput;
}
