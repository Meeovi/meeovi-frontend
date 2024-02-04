import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { SalutationOrderByWithAggregationInput } from "../../../inputs/SalutationOrderByWithAggregationInput";
import { SalutationScalarWhereWithAggregatesInput } from "../../../inputs/SalutationScalarWhereWithAggregatesInput";
import { SalutationWhereInput } from "../../../inputs/SalutationWhereInput";
import { SalutationScalarFieldEnum } from "../../../../enums/SalutationScalarFieldEnum";

@TypeGraphQL.ArgsType()
export class GroupBySalutationArgs {
  @TypeGraphQL.Field(_type => SalutationWhereInput, {
    nullable: true
  })
  where?: SalutationWhereInput | undefined;

  @TypeGraphQL.Field(_type => [SalutationOrderByWithAggregationInput], {
    nullable: true
  })
  orderBy?: SalutationOrderByWithAggregationInput[] | undefined;

  @TypeGraphQL.Field(_type => [SalutationScalarFieldEnum], {
    nullable: false
  })
  by!: Array<"id" | "salutation_key" | "created_at" | "updated_at">;

  @TypeGraphQL.Field(_type => SalutationScalarWhereWithAggregatesInput, {
    nullable: true
  })
  having?: SalutationScalarWhereWithAggregatesInput | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  take?: number | undefined;

  @TypeGraphQL.Field(_type => TypeGraphQL.Int, {
    nullable: true
  })
  skip?: number | undefined;
}
