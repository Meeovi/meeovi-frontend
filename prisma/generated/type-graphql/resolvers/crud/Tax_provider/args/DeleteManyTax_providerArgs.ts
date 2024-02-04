import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_providerWhereInput } from "../../../inputs/Tax_providerWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTax_providerArgs {
  @TypeGraphQL.Field(_type => Tax_providerWhereInput, {
    nullable: true
  })
  where?: Tax_providerWhereInput | undefined;
}
