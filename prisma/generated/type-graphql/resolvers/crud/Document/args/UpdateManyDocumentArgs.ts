import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { DocumentUpdateManyMutationInput } from "../../../inputs/DocumentUpdateManyMutationInput";
import { DocumentWhereInput } from "../../../inputs/DocumentWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocumentArgs {
  @TypeGraphQL.Field(_type => DocumentUpdateManyMutationInput, {
    nullable: false
  })
  data!: DocumentUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => DocumentWhereInput, {
    nullable: true
  })
  where?: DocumentWhereInput | undefined;
}
