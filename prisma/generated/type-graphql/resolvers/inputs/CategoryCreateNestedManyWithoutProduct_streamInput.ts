import * as TypeGraphQL from "type-graphql";
import * as GraphQLScalars from "graphql-scalars";
import { Prisma } from "@prisma/client";
import { DecimalJSScalar } from "../../scalars";
import { CategoryCreateManyProduct_streamInputEnvelope } from "../inputs/CategoryCreateManyProduct_streamInputEnvelope";
import { CategoryCreateOrConnectWithoutProduct_streamInput } from "../inputs/CategoryCreateOrConnectWithoutProduct_streamInput";
import { CategoryCreateWithoutProduct_streamInput } from "../inputs/CategoryCreateWithoutProduct_streamInput";
import { CategoryWhereUniqueInput } from "../inputs/CategoryWhereUniqueInput";

@TypeGraphQL.InputType("CategoryCreateNestedManyWithoutProduct_streamInput", {})
export class CategoryCreateNestedManyWithoutProduct_streamInput {
  @TypeGraphQL.Field(_type => [CategoryCreateWithoutProduct_streamInput], {
    nullable: true
  })
  create?: CategoryCreateWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => [CategoryCreateOrConnectWithoutProduct_streamInput], {
    nullable: true
  })
  connectOrCreate?: CategoryCreateOrConnectWithoutProduct_streamInput[] | undefined;

  @TypeGraphQL.Field(_type => CategoryCreateManyProduct_streamInputEnvelope, {
    nullable: true
  })
  createMany?: CategoryCreateManyProduct_streamInputEnvelope | undefined;

  @TypeGraphQL.Field(_type => [CategoryWhereUniqueInput], {
    nullable: true
  })
  connect?: CategoryWhereUniqueInput[] | undefined;
}
