import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { CurrencyWhereInput } from "../../../inputs/CurrencyWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCurrencyArgs {
  @TypeGraphQL.Field(_type => CurrencyWhereInput, {
    nullable: true
  })
  where?: CurrencyWhereInput | undefined;
}
