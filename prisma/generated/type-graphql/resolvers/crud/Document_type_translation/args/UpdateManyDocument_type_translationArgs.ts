import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_type_translationUpdateManyMutationInput } from "../../../inputs/Document_type_translationUpdateManyMutationInput";
import { Document_type_translationWhereInput } from "../../../inputs/Document_type_translationWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocument_type_translationArgs {
  @TypeGraphQL.Field(_type => Document_type_translationUpdateManyMutationInput, {
    nullable: false
  })
  data!: Document_type_translationUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Document_type_translationWhereInput, {
    nullable: true
  })
  where?: Document_type_translationWhereInput | undefined;
}
