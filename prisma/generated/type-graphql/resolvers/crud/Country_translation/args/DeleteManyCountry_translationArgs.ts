import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationWhereInput } from "../../../inputs/Country_translationWhereInput";

@TypeGraphQL.ArgsType()
export class DeleteManyCountry_translationArgs {
  @TypeGraphQL.Field(_type => Country_translationWhereInput, {
    nullable: true
  })
  where?: Country_translationWhereInput | undefined;
}
