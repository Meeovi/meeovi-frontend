import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateUpdateInput } from "../../../inputs/Country_stateUpdateInput";
import { Country_stateWhereUniqueInput } from "../../../inputs/Country_stateWhereUniqueInput";

@TypeGraphQL.ArgsType()
export class UpdateOneCountry_stateArgs {
  @TypeGraphQL.Field(_type => Country_stateUpdateInput, {
    nullable: false
  })
  data!: Country_stateUpdateInput;

  @TypeGraphQL.Field(_type => Country_stateWhereUniqueInput, {
    nullable: false
  })
  where!: Country_stateWhereUniqueInput;
}
