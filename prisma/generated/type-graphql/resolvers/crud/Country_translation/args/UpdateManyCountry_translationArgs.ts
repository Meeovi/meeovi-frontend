import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Country_translationUpdateManyMutationInput } from "../../../inputs/Country_translationUpdateManyMutationInput";
import { Country_translationWhereInput } from "../../../inputs/Country_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyCountry_translationArgs {
  @TypeGraphQL.Field(_type => Country_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Country_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Country_translationWhereInput, {
    nullable: true
  })
  where?: Country_translationWhereInput | undefined;
}
