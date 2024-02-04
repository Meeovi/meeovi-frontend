import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { TaxWhereInput } from "../../../inputs/TaxWhereInput";

@TypeGraphQL.ArgsType()
export class Shipping_methodTaxArgs {
  @TypeGraphQL.Field(_type => TaxWhereInput, {
    nullable: true
  })
  where?: TaxWhereInput | undefined;
}
