import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_tagWhereInput } from "../../../inputs/Customer_tagWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomer_tagArgs {
  @TypeGraphQL.Field(_type => Customer_tagWhereInput, {
    nullable: true
  })
  where?: Customer_tagWhereInput | undefined;
}
