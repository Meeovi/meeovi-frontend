import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_tagUpdateInput } from "../../../inputs/Customer_tagUpdateInput";
import { Customer_tagWhereUniqueInput } from "../../../inputs/Customer_tagWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCustomer_tagArgs {
  @TypeGraphQL.Field(_type => Customer_tagUpdateInput, {
    nullable: false
  })
  data!: Customer_tagUpdateInput;

  @TypeGraphQL.Field(_type => Customer_tagWhereUniqueInput, {
    nullable: false
  })
  where!: Customer_tagWhereUniqueInput;
}
