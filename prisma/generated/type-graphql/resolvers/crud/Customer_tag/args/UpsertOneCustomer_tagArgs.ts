import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_tagCreateInput } from "../../../inputs/Customer_tagCreateInput";
import { Customer_tagUpdateInput } from "../../../inputs/Customer_tagUpdateInput";
import { Customer_tagWhereUniqueInput } from "../../../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpsertOneCustomer_tagArgs {
  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_tagWhereUniqueInput;

  @TypeGraphQL.Field(_type => Customer_tagCreateInput, {
    nullable: false
  })
  create!: Customer_tagCreateInput;

  @TypeGraphQL.Field(_type => Customer_tagUpdateInput, {
    nullable: false
  })
  update!: Customer_tagUpdateInput;
}
