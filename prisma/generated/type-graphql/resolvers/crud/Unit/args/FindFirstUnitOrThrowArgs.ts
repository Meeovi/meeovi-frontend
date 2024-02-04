import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { UnitOrderByWithRelationAndSearchRelevanceInput } from "../../../inputs/UnitOrderByWithRelationAndSearchRelevanceInput";
import { UnitWhereInput } from "../../../inputs/UnitWhereInput";
import { UnitWhereUniqueInput } from "../../../inputs/UnitWhereUniqueInput";
import { UnitScalarFieldEnum } from "../../../../enums/UnitScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class FindFirstUnitOrThrowArgs {
  @TypeGraphQL.Field(_type => UnitWhereInput, {
    nullable: true
  })
  where?: UnitWhereInput | undefined;

  @TypeGraphQL.Field(_type => [UnitOrderByWithRelationAndSearchRelevanceInput], {
    nullable: true
  })
  orderBy?: UnitOrderByWithRelationAndSearchRelevanceInput[] | undefined;

  @TypeGraphQL.Field(_type => UnitWhereUniqueInput, {
    nullable: true
  })
  cursor?: UnitWhereUniqueInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;

  @TypeGraphQL.Field(_type => [UnitScalarFieldEnum], {
    nullable: true
  })
  distinct?: Array<"id" | "created_at" | "updated_at"> | undefined;
}
