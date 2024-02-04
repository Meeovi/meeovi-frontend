import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Unit_translationOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/Unit_translationOrderByWithRelationAndSearchRelevanceInput";
import { Unit_translationWhereInput } from "../../../inputs/Unit_translationWhereInput";
import { Unit_translationWhereUniqueInput } from "../../../inputs/Unit_translationWhereUniqueInput";
import { Unit_translationScalarFieldEnum } from "../../../../enums/Unit_translationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUnit_translationArgs {
  @TypeGraphQL.Field(_type => Unit_translationWhereInput, {
    nullable: true
  })
  where?: Unit_translationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [Unit_translationOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: Unit_translationOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => Unit_translationWhereUniqueInput, {
    nullable: true
  })
  cursor?: Unit_translationWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [Unit_translationScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"unit_id" | "language_id" | "short_code" | "name" | "custom_fields" | "created_at" | "updated_at"> | undefined;
}
