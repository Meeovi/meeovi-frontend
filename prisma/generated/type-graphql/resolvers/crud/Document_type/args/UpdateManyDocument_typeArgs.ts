import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_typeUpdateManyMutationInput } from "../../../inputs/Document_typeUpdateManyMutationInput";
import { Document_typeWhereInput } from "../../../inputs/Document_typeWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocument_typeArgs {
  @TypeGraphQL.Field(_type => Document_typeUpdateManyMutationInput, {
    nullable: false
  })
  data!: Document_typeUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Document_typeWhereInput, {
    nullable: true
  })
  where?: Document_typeWhereInput | undefined;
}
