import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_filesUpdateManyMutationInput } from "../../../inputs/Directus_filesUpdateManyMutationInput";
import { Directus_filesWhereInput } from "../../../inputs/Directus_filesWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectus_filesArgs {
  @TypeGraphQL.Field(_type => Directus_filesUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_filesUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Directus_filesWhereInput, {
    nullable: true
  })
  where?: Directus_filesWhereInput | undefined;
}
