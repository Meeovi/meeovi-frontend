import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationCreateManyInput } from "../../../inputs/Country_translationCreateManyInput";

@TypeGraphQL.ArgsType()
export class CreateManyCountry_translationArgs {
  @TypeGraphQL.Field(_type => [Country_translationCreateManyInput], {
    nullable: false
  })
  data!: Country_translationCreateManyInput[];

  @TypeGraphQL.Field(_type => Boolean, {
    nullable: true
  })
  skipDuplicates?: boolean | undefined;
}
