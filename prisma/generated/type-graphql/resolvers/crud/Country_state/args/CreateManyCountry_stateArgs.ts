import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_stateCreateManyInput } from "../../../inputs/Country_stateCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCountry_stateArgs {
  @TypeGraphQL.Field(_type => [Country_stateCreateManyInput], {
    nullable: false
  })
  data!: Country_stateCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
