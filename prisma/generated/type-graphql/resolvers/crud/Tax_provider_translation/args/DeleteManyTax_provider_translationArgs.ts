import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Tax_provider_translationWhereInput } from "../../../inputs/Tax_provider_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyTax_provider_translationArgs {
  @TypeGraphQL.Field(_type => Tax_provider_translationWhereInput, {
    nullable: true
  })
  where?: Tax_provider_translationWhereInput | undefined;
}
