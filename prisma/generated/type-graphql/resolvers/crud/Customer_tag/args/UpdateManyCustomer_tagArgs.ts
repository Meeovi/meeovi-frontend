import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_tagUpdateManyMutationInput } from "../../../inputs/Customer_tagUpdateManyMutationInput";
import { Customer_tagWhereInput } from "../../../inputs/Customer_tagWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCustomer_tagArgs {
  @TypeGraphQL.Field(_type => Customer_tagUpdateManyMutationInput, {
    nullable: false
  })
  data!: Customer_tagUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Customer_tagWhereInput, {
    nullable: true
  })
  where?: Customer_tagWhereInput | undefined;
}
