import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Directus_foldersUpdateManyMutationInput } from "../../../inputs/Directus_foldersUpdateManyMutationInput";
import { Directus_foldersWhereInput } from "../../../inputs/Directus_foldersWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDirectus_foldersArgs {
  @TypeGraphQL.Field(_type => Directus_foldersUpdateManyMutationInput, {
    nullable: false
  })
  data!: Directus_foldersUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Directus_foldersWhereInput, {
    nullable: true
  })
  where?: Directus_foldersWhereInput | undefined;
}
