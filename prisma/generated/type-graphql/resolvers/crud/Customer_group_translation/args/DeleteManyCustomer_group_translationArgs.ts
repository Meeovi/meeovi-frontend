import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_group_translationWhereInput } from "../../../inputs/Customer_group_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomer_group_translationArgs {
  @TypeGraphQL.Field(_type => Customer_group_translationWhereInput, {
    nullable: true
  })
  where?: Customer_group_translationWhereInput | undefined;
}
