import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Document_base_configUpdateManyMutationInput } from "../../../inputs/Document_base_configUpdateManyMutationInput";
import { Document_base_configWhereInput } from "../../../inputs/Document_base_configWhereInput";

@TypeGraphQL.ArgsType()
export class UpdateManyDocument_base_configArgs {
  @TypeGraphQL.Field(_type => Document_base_configUpdateManyMutationInput, {
    nullable: false
  })
  data!: Document_base_configUpdateManyMutationInput;

  @TypeGraphQL.Field(_type => Document_base_configWhereInput, {
    nullable: true
  })
  where?: Document_base_configWhereInput | undefined;
}
