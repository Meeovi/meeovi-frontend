import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Customer_recoveryWhereInput } from "../../../inputs/Customer_recoveryWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCustomer_recoveryArgs {
  @TypeGraphQL.Field(_type => Customer_recoveryWhereInput, {
    nullable: true
  })
  where?: Customer_recoveryWhereInput | undefined;
}
