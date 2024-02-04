import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_state_translationWhereInput } from "../../../inputs/Country_state_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCountry_state_translationArgs {
  @TypeGraphQL.Field(_type => Country_state_translationWhereInput, {
    nullable: true
  })
  where?: Country_state_translationWhereInput | undefined;
}
